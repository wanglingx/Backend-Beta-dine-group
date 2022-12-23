drop table update_rank;
drop table menu;
drop table user;
drop table restaurant;
drop table foodtype;
drop table religion;
drop table canteen;

CREATE TABLE canteen (
	canteen_id varchar(255) PRIMARY KEY ,
	canteen_name varchar(255)
);

CREATE TABLE religion (
	religion_id varchar(255) PRIMARY KEY ,
	religion_name varchar(255)
);

CREATE TABLE foodtype (
	foodtype_id varchar(255) PRIMARY KEY ,
	foodtype_name varchar(255)
);

CREATE TABLE restaurant (
	restaurant_id varchar(255) PRIMARY KEY ,
	restaurant_name varchar(255),
	restaurant_time varchar(255),
	phone_number varchar(255),
	restaurant_score  numeric(2,1),
	restaurant_picture varchar(255),
	canteen_id varchar(255) ,
	FOREIGN KEY(canteen_id) REFERENCES canteen(canteen_id) , 
	religion_id varchar(255) ,
	FOREIGN KEY(religion_id) REFERENCES religion(religion_id) ,
	foodtype_id varchar(255) ,
	FOREIGN KEY(foodtype_id) REFERENCES foodtype(foodtype_id) ,
	restaurant_timestamp  TIMESTAMP
);

CREATE TABLE user (
	user_id varchar(255) PRIMARY KEY ,
	student_id varchar(255) UNIQUE NOT NULL,
	firstname varchar(255) ,
	lastname varchar(255),
	status varchar(255) ,
	user_timestamp timestamp
);

CREATE TABLE menu (
	menu_id varchar(255) PRIMARY KEY ,
	menu_name varchar(255) ,
	price float(1),
	detail text,
	score numeric(2,1) ,
	menu_picture varchar(255) ,
	restaurant_id varchar(255) ,
	FOREIGN KEY(restaurant_id) REFERENCES restaurant(restaurant_id) ,
	menu_timestamp timestamp
);

CREATE TABLE update_rank (
	user_id varchar(255) ,
	FOREIGN KEY(user_id) REFERENCES user(user_id) ,
	menu_id varchar(255) ,
	FOREIGN KEY(menu_id) REFERENCES menu(menu_id) ,
	CONSTRAINT uprank_combinekey_id PRIMARY KEY(user_id , menu_id ) ,
	score numeric(2,1),
	comment text,
	ur_timestamp timestamp
);

create table admin (
    admin_id varchar(255),
    password varchar(255),
    timestamps timestamp
); 
