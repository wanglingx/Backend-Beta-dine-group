# Backend-Beta-dine-group
This is final term project software engineering of computer science KMITL year 3-2565

# read this
โฟลเดอร์ config กับ handler ปล่อยมันไปก่อน อยู่ในขั้นพัฒนา แต่รวมคือเขียนฟังก์ชันได้เลออ

# database create table script
create table Religion (
	religion_id varchar(255) primary key,
	religion_name varchar(255)
)

create table Food_type (
	type_id varchar(255) primary key,
	type_name varchar(255)
)

create table Canteen (
	canteen_id varchar(255) primary key,
	centeen_name varchar(255)
)

create table Restaurant (
	res_id varchar(255) primary key,
	canteen_id varchar(255),
	religion_id varchar(255),
	type_id varchar(255),
	res_name varchar(255),
	create_time DATE,
	CONSTRAINT Fk_canteen FOREIGN KEY(canteen_id)
	REFERENCES Canteen(canteen_id),
	CONSTRAINT Fk_religion FOREIGN KEY(religion_id)
	REFERENCES Religion(religion_id),
	CONSTRAINT Fk_type FOREIGN KEY(type_id)
	REFERENCES Food_type(type_id)
)

create table Menu (
	menu_id varchar(255) primary key,
	canteen_id varchar(255),
	res_id varchar(255),
	menu_name varchar(255),
	pic_link_path text,
	point_food int,
	create_time DATE,
	CONSTRAINT Fk_canteen1 FOREIGN KEY(canteen_id)
	REFERENCES Canteen(canteen_id),
	CONSTRAINT Fk_restaurant FOREIGN KEY(res_id)
	REFERENCES Restaurant(res_id)
)
