# Use the official MySQL image as the base image
FROM mysql:5.7.42

# Set environment variables for the root user and password
ENV MYSQL_ROOT_USER=root
ENV MYSQL_ROOT_PASSWORD=mysql

COPY mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
EXPOSE 3306

CMD ["mysqld"]


