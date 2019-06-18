import socketio


sio = socketio.Client()
sio.connect('http://192.168.0.63:5001')

# print("connected to webScocket")

# sio.emit('join_room', 'room_alert')

# @sio.on('pdu_datas')
# def on_message(data):
#     print("ups masuk", data)

data = "github, pornhub, etc"


sio.emit('alert_in_data', data )
# print("delivered")
# sio.on('alert_datas', async (datas)=>{
#     print(datas)
# })

# def connect


