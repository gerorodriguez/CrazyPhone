<h3>This README will guide you through the necessary steps to run the YAML file that configures a PostgreSQL service using Docker.</h3>

<h3>Prerequisites</h3>

    Make sure you have the following prerequisites installed before proceeding:

        ✓ Docker installed on your system.

<h3>Steps to Run</h3>

    Follow these steps to run the PostgreSQL service using the provided YAML file:

        1- Open your terminal.

        2- Navigate to the directory where the YAML file is located.

        3- Execute the following command to start the PostgreSQL container:

            docker-compose up -d

            This command will use the YAML file (docker-compose.yml) to create and run a Docker container with the specified configuration.

        4- Once the container is up and running, you can verify that the PostgreSQL service is functioning correctly using a PostgreSQL client or a database management tool like pgAdmin.

        ✓ Host: 127.0.0.1 (localhost)
        ✓ Port: 5432
        ✓ User: crazyphone
        ✓ Password: The password should be configured in the YAML file (replace <your_password> in the YAML file with the desired password).

        5- When you are done using the PostgreSQL service, you can stop and remove the container by running the following command:

            docker-compose down

            This will stop and remove the PostgreSQL container.

    That's it! You should now be able to run the YAML file and use a PostgreSQL server in your local environment.
