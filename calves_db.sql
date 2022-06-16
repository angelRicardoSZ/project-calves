/*
    Creation of database
*/
CREATE SCHEMA `calves_db` DEFAULT CHARACTER SET utf8 ;


/*
    Creation of tables
*/


/*
    calves
*/

CREATE TABLE `calves_db`.`calves` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `data_entry` TIMESTAMP NOT NULL DEFAULT NOW(),
  `data_exit` TIMESTAMP NOT NULL,
  `color` SMALLINT NOT NULL, 
  `marmoleo` SMALLINT NOT NULL,
  `weight` DECIMAL(5,2) NOT NULL,
  `price` DECIMAL(7,2) NOT NULL,
  `supplier_id` SMALLINT NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'This table contains all the data of calves';


/*
    suppliers
*/
CREATE TABLE `calves_db`.`suppliers` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
COMMENT = 'This table contains all the data of suppliers';

ALTER TABLE `calves_db`.`suppliers` 
ADD COLUMN `created_at` TIMESTAMP NOT NULL DEFAULT NOW() AFTER `name`;


/*
    quarantines
*/
CREATE TABLE `calves_db`.`quarantines` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `start_date` TIMESTAMP NOT NULL DEFAULT NOW(),
  `end_date` TIMESTAMP NOT NULL,
  `status` TINYINT NOT NULL,
  `diets_id` SMALLINT NOT NULL,
  `calves_id` SMALLINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
COMMENT = 'Information on all quarantines';

/*
    sensor_data
*/

CREATE TABLE `calves_db`.`sensor_data` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `temperature` DECIMAL(4,2) NOT NULL,
  `respiratory_frequency` INT NOT NULL,
  `heart_rate` INT NOT NULL,
  `blood_frequency` INT NOT NULL,
  `date_analysis` TIMESTAMP NOT NULL DEFAULT NOW(),
  `calves_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'Readings of the sensors placed on each hatchling';

ALTER TABLE `calves_db`.`sensor_data` 
CHANGE COLUMN `calves_id` `calves_id` SMALLINT NOT NULL ;

/*
    diets
*/

CREATE TABLE `calves_db`.`diets` (
  `id` SMALLINT NOT NULL,
  `breakfast` VARCHAR(45) NOT NULL,
  `eat` VARCHAR(45) NOT NULL,
  `dinner` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'Description of each diet';



/*
    foreing_keys
*/

/*
    calves_suppliers
*/
ALTER TABLE `calves_db`.`calves` 
ADD INDEX `calves_suppliers_idx` (`supplier_id` ASC) VISIBLE;
;
ALTER TABLE `calves_db`.`calves` 
ADD CONSTRAINT `calves_suppliers`
  FOREIGN KEY (`supplier_id`)
  REFERENCES `calves_db`.`suppliers` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;


/*
    sensor_calves
*/

ALTER TABLE `calves_db`.`sensor_data` 
ADD CONSTRAINT `sensor_calves`
  FOREIGN KEY (`calves_id`)
  REFERENCES `calves_db`.`calves` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;


/*
    quarantines_calves
*/
ALTER TABLE `calves_db`.`quarantines` 
ADD INDEX `quarantines_calves_idx` (`calves_id` ASC) VISIBLE;
;
ALTER TABLE `calves_db`.`quarantines` 
ADD CONSTRAINT `quarantines_calves`
  FOREIGN KEY (`calves_id`)
  REFERENCES `calves_db`.`calves` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
/*
    quarantines_diets
*/

ALTER TABLE `calves_db`.`quarantines` 
ADD INDEX `quarantines_diets_idx` (`diets_id` ASC) VISIBLE;
;
ALTER TABLE `calves_db`.`quarantines` 
ADD CONSTRAINT `quarantines_diets`
  FOREIGN KEY (`diets_id`)
  REFERENCES `calves_db`.`diets` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;


/*
    Triggers
*/

/*
    end date quarantines
*/
CREATE TRIGGER setDefaultDate
    BEFORE INSERT ON `crias_db`.`quarantines`
    FOR  EACH ROW
    SET NEW.end_date = DATE_ADD(NOW(), INTERVAL 40 DAY);


/*
    exit date (next process) calves
*/
CREATE TRIGGER setDefaultDateCalves
    BEFORE INSERT ON `calves_db`.`calves`
    FOR  EACH ROW
    SET NEW.date_exit = DATE_ADD(NOW(), INTERVAL 5 MONTH);
