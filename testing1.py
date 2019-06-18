import socketio


sio = socketio.Client()
sio.connect('http://192.168.0.63:5001')



sio.emit('join_room', 'room_alert')

@sio.on('alert_datas')
def on_message(data):                                       
    print(data)