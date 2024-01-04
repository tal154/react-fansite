drop database if exists fansite;
create database fansite;
use fansite;

create table about (
	about_id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    about_description text not null,
    git varchar(50) not null
);

create table forum (
	forum_id int primary key auto_increment,
    forum_name varchar(100) not null,
    title varchar(100) not null,
    post_content text not null,
    post_date date null
);

insert into about (first_name, last_name, about_description, git) values
		('Tony', 'Lee', 'I am a huge Monster Hunter fan, with a B.S. in Mathematics and Computer Science. I enjoy playing tennis, video games, and reading. My favorite monster from the Monster Hunter Franchise is the Rathalos, and my most recent favorite weapon is the Bow, previously it was the Switch Axe. ','github.com/tal154'),
		('Hayoung', 'Cheon', 'Passionate and fast adapting backend developer with some experiences of designing, building, and enhancing JAVA spring boot web application projects. I have a B.S. in Elementary Education and Computer Education. I enjoy camping, hiking and solving puzzles.','github.com/oyunmintrio95'),
		('Autumn', 'Sprout', 'I like books and reading. Those are not necessarily the same thing.','github.com/jotasprout');