from flask import Flask, jsonify
import pymysql.cursors

app = Flask(__name__)

def get_db_connection():
    connection = pymysql.connect(host='mariadb-container',
                                 user='root',
                                 password='my-secret-pw',
                                 database='flaskapp',
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection

@app.route('/')
def users():
    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
    connection.close()
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)