cd backend
pip install -r requirements.txt
flask db init
flask db migrate
flask db upgrade
cd ..
cd frontend
npm install