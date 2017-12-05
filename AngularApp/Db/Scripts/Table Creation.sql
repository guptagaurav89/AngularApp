create schema [Config]

create table Config.[User](
UserId int Identity primary key,
UserName varchar(20) not null,
FirstName varchar(50),
LastName varchar(50))

