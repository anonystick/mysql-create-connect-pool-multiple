## How to check 
That an application with a pool of 96 connections performs almost 50x faster than one with 1000 (or 4000) connections. Even 96 connections is very large unless you have a 48-core server. Basically, the formula is this:

connections = ((core_count * 2) + effective_spindle_count)

Where "effective_spindle_count" is the number of storage disks. For a simple 4-core server with one hard disk this means 9 connection pool -- call it 10 as a round number.

👉 👉 👉 👉  [Video Demo](https://youtu.be/AjzeZ8nzJ8E)

## how to test

pls view video on youtube...