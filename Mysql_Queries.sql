
--DDL--
use AniketDB

create table users(
    username varchar(10),
    userage int
);
ALTER TABLE users CHANGE COLUMN userage userage TINYINT;
ALTER TABLE users ADD COLUMN usermobile BIGINT;
ALTER TABLE users ADD COLUMN userplacecc  BIGINT;
ALTER TABLE users ADD COLUMN userplacecc userplace varchar(100);



ALTER TABLE users CHANGE usermobile usermobile INT;
ALTER TABLE users CHANGE usermobile usermobile BIGINT;
ALTER TABLE users CHANGE username username varchar(100);
ALTER TABLE users CHANGE userplacess userplace varchar(100)
ALTER TABLE users ADD COLUMN userid int AUTO_INCREMENT PRIMARY KEY;


--DML
 
INSERT INTO users (username,userage,usermobile) values ('Aniket Pawar', 20,8693861015);
INSERT INTO users (username,userage,usermobile) values ('Anil  swant', 21,8693861016);
INSERT INTO users (username,userage,usermobile) values ('Aniket sable', 22,8693861018);
INSERT INTO users (username,userage,usermobile) values ('suleman Pawar', 23,8693861017;
INSERT INTO users (username,userage,usermobile) values ('Karan Pawar', 24,8693861019);
INSERT INTO users (username,userage,usermobile) values ('vipul barkya', 25,8693861010);
INSERT INTO users (username,userage,usermobile) values ('shubham salunkhe', 26,8693861011);

DELETE FROM users;


--insert--

TRUNCATE TABLE users;

--insert--
--WHERE CLAUSE--

DELETE FROM users WHERE userid=4;
DELETE FROM users WHERE username='shubhamsalunkhe';

TRUNCATE TABLE users;
--insert
UPDATE users SET username='Aniket pawar',userage=20 WHERE userid=1;



--*-- universal selctor---

SELECT * FROM users;
SELECT * FROM users WHERE 1;
SELECT userage,userid FROM users WHERE 1;
SELECT userage,userid FROM users WHERE userid>3;
SELECT userage,userid,username FROM users WHERE username ="Aniket pawar"
SELECT userage,userid,username FROM users WHERE userage=20 or userage=22 or userage=23;
SELECT userage,userid,username FROM users WHERE userage IN(20,21,22,23);
SELECT userage,userid,username FROM users WHERE username IN('Aniket Pawar','Aniket sable'.'Akshay Kumar');
SELECT userage,userid,username FROM users WHERE userage >=20 and userage<=25
SELECT userage,userid,username FROM users WHERE userage BETWEEN 20 and 25
SELECT userage,userid,username FROM users WHERE username like 's%'
SELECT userage,userid,username FROM users WHERE username like 'sa%'
SELECT userage,userid,username FROM users WHERE username like '%r'
SELECT userage,userid,username FROM users WHERE username like '%w%'



INSERT INTO users (username,userage,usermobile) values ('Aniket pawar',30,8693861015);
SELECT userage,userid,username FROM users WHERE username ='Aniket pawar' and userage=20;
SELECT userage,userid,username FROM users WHERE username ='Aniket pawar' and userage=30;    
SELECT userage,userid,username FROM users WHERE username ='Aniket pawar' or userage=23;

SELECT userage,userid,username from users ORDER BY username;
SELECT userage,userid,username from users ORDER BY username ASC;
SELECT userage,userid,username from users ORDER BY username DESC;

SELECT userage,userid,username from users ORDER BY userage;
SELECT userage,userid,username from users ORDER BY userage ASC, username DESC;




--SELECT userage,userid,username,from ORDER BY userage limit start ,total;--


SELECT userage,userid,username FROM users ORDER BY userage limit 0,2;

SELECT userage,userid,username FROM users ORDER BY userage limit 3,2;
SELECT userage,userid,username FROM users ORDER BY userage limit 0,1;

SELECT userage,userid,username FROM users ORDER BY userage limit 1,1;
-- SELECT userage,userid,username FROM users ORDER BY userage  ASC limit 0,1;

-- SELECT userage,userid,username FROM users ORDER BY userage  DESC limit 1,1;
SELECT userage,userid,username FROM users WHERE userage<24 ORDER BY userage DESC LIMIT 0,3;


CREATE TABLE country(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO country (name) values ('india');
INSERT INTO country (name) values ('usa');
INSERT INTO country (name) values ('uk');



CREATE TABLE statess(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    countryid INT
);

-- DELETE FROM states

INSERT INTO states (name ,countryid) values ('Maharashtra',1);
INSERT INTO states (name ,countryid) values ('punjab',1);
INSERT INTO states (name ,countryid) values ('Goa',1);
INSERT INTO states (name ,countryid) values ('Texas',2)
INSERT INTO states (name ,countryid) values ('New Jearsy',2)
INSERT INTO states (name ,countryid) values ('Colombo',4)




-- DELETE FROM states
DELETE FROM TABLE states


CREATE TABLE statess(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    countryid INT
);


INSERT INTO statess (name ,countryid) values ('Maharashtra',1);
INSERT INTO statess (name ,countryid) values ('punjab',1);
INSERT INTO statess (name ,countryid) values ('Goa',1);
INSERT INTO statess (name ,countryid) values ('Texas',2);
INSERT INTO statess (name ,countryid) values ('New Jearsy',2);
INSERT INTO statess (name ,countryid) values ('Colombo',4);


SELECT country.name,statess.name FROM country,statess WHERE country.id =countryid
SELECT c.name,s.name FROM country as c JOIN statess as s ON c.id=countryid;
SELECT c.name,s.name FROM country as c LEFT JOIN statess as s ON c.id=countryid;
SELECT c.name,s.name FROM country as c RIGHT JOIN statess as s ON c.id=countryid;









































