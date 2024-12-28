package main

import (
	"fmt"
	"net/http"
  "gorm.io/gorm"
  "gorm.io/driver/sqlite"
)

var db *gorm.DB
var err error

type User struct {
	gorm.Model
	Name  string
	Email string
}

func InitialMigration() {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
	  panic("failed to connect database")
	}
	defer db.close()

	db.AutoMigrate(&User{})
}

func AllUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "All User EndPoint Hit ")
}

func NewUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "New User EndPoint Hit ")
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Deleted User EndPoint Hit")
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Update User EndPoint Hit")
}
