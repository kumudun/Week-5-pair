<!-- ## MongoDB Installation, Start, and Status Check

### 1. Install MongoDB
Follow these steps to install MongoDB on Ubuntu:

1. Import the MongoDB GPG key:
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   ```

2. Add the MongoDB repository:
   ```bash
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   ```

3. Update the package list:
   ```bash
   sudo apt update
   ```

4. Install MongoDB:
   ```bash
   sudo apt install -y mongodb-org
   ```

### 2. Start MongoDB
To start MongoDB manually:

1. Create the data directory if it doesn't exist:
   ```bash
   sudo mkdir -p /data/db
   sudo chown -R $USER:$USER /data/db
   ```

2. Start MongoDB:
   ```bash
   mongod --dbpath /data/db --bind_ip 0.0.0.0
   ```

To run MongoDB in the background:
```bash
mongod --dbpath /data/db --bind_ip 0.0.0.0 --fork --logpath /data/db/mongod.log
```

### 3. Check MongoDB Status
To verify if MongoDB is running:

1. Check the process:
   ```bash
   ps aux | grep mongod
   ```

2. Connect to MongoDB using the shell:
   ```bash
   mongosh
   ```

3. Check MongoDB logs (if running in the background):
   ```bash
   tail -f /data/db/mongod.log
   ``` -->