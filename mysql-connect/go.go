package main

import (
    "fmt"
    "time"
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    start := time.Now();

    db, err := sql.Open("mysql", "root:pass@tcp(127.0.0.1:3306)/oreore")
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()

    rows, err := db.Query("SELECT * FROM personal")
    defer rows.Close()
    if err != nil {
        fmt.Println(err)
    }

    for rows.Next() {
        var id int
        var name string
        err = rows.Scan(&id, &name)
        if err != nil {
            fmt.Println(err)
        }
        fmt.Println(id, name)
    }

    end := time.Now();
    fmt.Printf("%f秒\n",(end.Sub(start)).Seconds())
}
