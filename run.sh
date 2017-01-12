killall -9 python
cd /home/andy/proyectos/cb
python manage.py runserver&

cd /home/andy/proyectos/cf/server
npm start&

cd /home/andy/proyectos/cf/client
gulp watch&

