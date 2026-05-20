import socket
import sys

if len(sys.argv) < 2:
    print("Falta ingresar una IP")
    sys.exit()

target = sys.argv[1]
print(f"Escaneando... {target}")

ports = [22, 53, 80, 443]

for port in ports:
    sock = socket.socket()
    sock.settimeout(1)
    result = sock.connect_ex((target, port))

    if result == 0:
        print(f"Puerto {port} abierto")
    
    sock.close()