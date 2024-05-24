# Reactive-Microservices-Lab

Project Demo
============

This project demonstrates how to run and interact with a Kafka-based messaging system using Docker Compose and Make.

Prerequisites
-------------

Before running the demo, ensure you have the following installed on your system:

*   Docker
    
*   Docker Compose
    
*   Make
    

Getting Started
---------------

To set up and run the demo, follow these steps:

1.  docker-compose up
    
2.  make start
    
3.  make watch-kafka
    
4.  make trigger
    

Makefile Targets
----------------

*   **make start**: Starts the application.
    
*   **make watch-kafka**: Watches for incoming Kafka messages.
    
*   **make trigger**: Triggers a new Kafka message.
    

Additional Information
----------------------

For more details on how the system works or to customize the demo, refer to the source files and configurations provided in this repository.
