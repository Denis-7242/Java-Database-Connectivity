# Java Database Connectivity (JDBC) Documentation

This README provides a clear introduction to **Java Database Connectivity (JDBC)**, how it works, and examples you can use when building Java applications that interact with databases such as MariaDB, MySQL, PostgreSQL, SQLite, and H2.

---

## 📌 What is JDBC?

JDBC (Java Database Connectivity) is an API in Java that enables applications to connect to relational databases, execute SQL queries, and retrieve or manipulate data.

It serves as a **bridge between Java code and the database**, allowing seamless communication.

---

## 📘 JDBC Workflow Overview

JDBC works in these main steps:

1. **Load the JDBC Driver**
2. **Establish a Connection to the Database**
3. **Create and Execute SQL Statements**
4. **Process Returned Results**
5. **Close the Connection**

This workflow is consistent across different database systems.

---

## 🔧 Project Setup

### Add JDBC Driver (Example for MariaDB/MySQL)

If using Maven, add this dependency:

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.3.0</version>
</dependency>
```

> Note: This works for both MySQL and MariaDB.

### Typical JDBC URL Format

```
jdbc:mysql://hostname:port/databasename
```

Example:

```
jdbc:mysql://localhost:3306/schooldb
```

---

## 🚀 Basic JDBC Example

```java
import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/schooldb";
        String username = "root";
        String password = "your_password";

        try {
            // 1. Load and Register Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Create Connection
            Connection con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected Successfully!");

            // 3. Create Statement
            Statement stmt = con.createStatement();

            // 4. Execute Query
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // 5. Process Results
            while (rs.next()) {
                System.out.println(rs.getInt("id") + "  " + rs.getString("name"));
            }

            // 6. Close Connection
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## 🔐 Using PreparedStatement (Recommended)

`PreparedStatement` prevents SQL injection and is more efficient for repeated queries.

```java
String sql = "INSERT INTO students(name, age) VALUES (?, ?)";
PreparedStatement ps = con.prepareStatement(sql);

ps.setString(1, "Denis");
ps.setInt(2, 21);

ps.executeUpdate();
```

---

## 📦 Common JDBC Classes

| Class                 | Description                                 |
| --------------------- | ------------------------------------------- |
| **DriverManager**     | Manages database drivers and connections    |
| **Connection**        | Represents an active database connection    |
| **Statement**         | Executes general SQL queries                |
| **PreparedStatement** | Executes parameterized SQL queries          |
| **ResultSet**         | Stores and provides access to returned data |

---

## 🧪 CRUD Operations (Create, Read, Update, Delete)

### CREATE Example

```java
String sql = "INSERT INTO users(name,email) VALUES(?,?)";
PreparedStatement ps = con.prepareStatement(sql);
ps.setString(1, "John");
ps.setString(2, "john@email.com");
ps.executeUpdate();
```

### READ Example

```java
ResultSet rs = stmt.executeQuery("SELECT * FROM users");
while (rs.next()) {
    System.out.println(rs.getString("name"));
}
```

### UPDATE Example

```java
String sql = "UPDATE users SET name=? WHERE id=?";
PreparedStatement ps = con.prepareStatement(sql);
ps.setString(1, "New Name");
ps.setInt(2, 1);
ps.executeUpdate();
```

### DELETE Example

```java
String sql = "DELETE FROM users WHERE id=?";
PreparedStatement ps = con.prepareStatement(sql);
ps.setInt(1, 1);
ps.executeUpdate();
```

---

## 🧹 Closing Connections

Always close your database connections to avoid memory leaks.

```java
con.close();
```

---

## **2. How to Run**

1. Clone the repository:

```bash
git clone <https://github.com/Denis-7242/Java-Database-Connectivity.git>
```

2. Navigate into the project:

```bash
cd Java database connectivity
```

> Make sure your MySQL/MariaDB server is running and `schooldb` database exists.

---

## **3. Contribution Guidelines**

* Fork the repository.
* Create a new branch for your feature: `git checkout -b feature-name`
* Commit your changes: `git commit -m "Add feature"`
* Push to your branch: `git push origin feature-name`
* Open a Pull Request.

---

## 🏁 Conclusion

JDBC is a powerful API for interacting with relational databases in Java. It provides the foundation for more advanced frameworks like Hibernate and Spring Data.

This documentation covers:

* How JDBC works
* Setup instructions
* CRUD examples
* Best practices

> ✅ Note: On Kali Linux, MariaDB is a recommended MySQL replacement, fully compatible with JDBC.

---

## 📜 License

This project is open-source. Feel free to modify and use it as needed.
