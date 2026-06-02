#!/bin/bash
option=""
user=""
group=""

new_user() {
    user=$(zenity --entry --title="Creacion de usuario" --text="Ingrese el nombre")
    pass=$(zenity --entry --title="Agregar contraseña" --text="Ingrese la contraseña" --hide-text)
    # Agrega el usuario
    sudo useradd -m "$user" -s /bin/bash
    # Asigna la contraseña
    echo "$user:$pass" | sudo chpasswd

    zenity --info --title="Creacion de usuario" --text="Usuario creado correctamente: $user"
}

del_user() {
    user=$(zenity --entry --title="Eliminacion de usuario" --text="Ingrese el nombre del usuario")
    # Confirmacion antes de borrar
    zenity --question --title="Confirmacion" --text="¿Seguro que quieres eliminar a: $user ?"

    if [ $? -eq 0 ];then
        sudo userdel -r "$user"
        zenity --info --title="Eliminacion de usuario" --text="El usuario $user fue eliminado satisfactoriamente"
    else 
        zenity --error --title="Eliminacion de usuario" --text="No se pudo realizar la operacion"
    fi 
}

add_group() {
    group=$(zenity --entry --title="Creacion de grupo" --text="Ingrese el nombre del grupo")
    sudo groupadd "$group"

    zenity --info --title="Creacion de grupo" --text="El grupo $group fue creado satisfactoriamente"
}

add_user_group() {
    user=$(zenity --entry --title="Seleccion de usuario" --text="Ingrese el usuario a ser movido")
    group=$(zenity --entry --title="Seleccion de grupo" --text="Ingrese el grupo de destino")

    sudo usermod -aG "$group" "$user"

    zenity --info --title="Migracion de usuario" --text="El usuario $user fue movido a $group correctamente"
}

while true; do
    option=$(zenity --list --title="Menu de gestion del usuario" --text="Seleccione una opcion:" \
    --column="Opcion" --column="Descripcion" \
    "1" "Crear usuario" \
    "2" "Borrar usuario" \
    "3" "Agregar un grupo" \
    "4" "Añadir un usuario a un grupo" \
    "0" "Salir" \
    --height=350 --width=500)

    case $option in 
    "1")
        new_user
    ;;
    "2")
        del_user
    ;;
    "3")
        add_group
    ;;
    "4")
        add_user_group
    ;;
    "0")
        zenity --info --title"Programa finalizado" --text"El programa finalizó correctamente"
        exit
    ;;
    *)
        zenity --error --title"Opcion no válida" --text"Ingrese una opcion válida"
        exit
    ;;
    esac
done

