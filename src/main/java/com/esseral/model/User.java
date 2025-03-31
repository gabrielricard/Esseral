package com.wuphf.model;

public class User {

    private int userId;
    private String userName;
    private String password;
    private String name;
    private String lastName;

    // Constructors, getters and setters

    public User() {}

    public User(int userId, String userName, String password, String name, String lastName) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
