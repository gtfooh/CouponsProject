package com.company;

import java.sql.Connection;
import java.util.HashSet;
import java.util.Set;

public class ConnectionPool {
    private static ConnectionPool ourInstance = new ConnectionPool();


    public static ConnectionPool getInstance() {
        return ourInstance;
    }

    private Set<DBConnection> connections = new HashSet<>();

    private ConnectionPool() {

        this.connections.add(new DBConnection());
        this.connections.add(new DBConnection());
        this.connections.add(new DBConnection());
        this.connections.add(new DBConnection());
        this.connections.add(new DBConnection());
    }

    public DBConnection getConnection(){
        DBConnection conncetion = null;
        return conncetion;
    }
    public void returConnection(DBConnection connection){
        this.connections.add(connection);
    }

    public void closeAllConnections(){
        this.connections.clear();
    }
}
