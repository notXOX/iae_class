#!/bin/bash

new_directory() {
    dir_name=$(zenity --entry --title="Crear directorio" \
    --text="Ingrese el nombre del directorio a crear:" \
    --width=300)
    
    if [ -d "$dir_name" ]; then
        zenity --error --text="El directorio ya existe." \
        --width=300
    else
        mkdir "$dir_name"
        zenity --info --text="Directorio '$dir_name' creado exitosamente." \
        --width=300
    fi
}

new_archive() {
    file_name=$(zenity --entry --title="Crear archivo" \
    --text="Ingrese el nombre del archivo a crear:" \
    --width=300)
    
    if [ -e "$file_name" ]; then
        zenity --error --text="El archivo ya existe." \
        --width=300
    else
        touch "$file_name"
        zenity --info --text="Archivo '$file_name' creado exitosamente." \
        --width=300
    fi
}

view_content() {
    dir_name=$(zenity --entry --title="Visualizar contenido" \
    --text="Ingrese el nombre del directorio a visualizar:" \
    --width=300)
    
    if [ -d "$dir_name" ]; then
        content=$(ls "$dir_name")
        zenity --info --text="Contenido del directorio '$dir_name':\n$content" \
        --width=400
    else
        zenity --error --text="El directorio no existe." \
        --width=300
    fi
}

del_archive() {
    file_name=$(zenity --entry --title="Eliminar archivo" \
    --text="Ingrese el nombre del archivo a eliminar:" \
    --width=300)
    
    if [ -e "$file_name" ]; then
        rm -rf "$file_name"
        zenity --info --text="Archivo '$file_name' eliminado exitosamente." \
        --width=300
    else
        zenity --error --text="El archivo no existe." \
        --width=300
    fi
}
while true; do
    option=$(zenity --list --title="Parcial de Introduccion a Linux" \
        --column="" --column="Menu de opciones" \
        "1" "Crear directorios" \
        "2" "Crear archivos" \
        "3" "Visualizar el contenido de un directorio" \
        "4" "Eliminar archivos" \
        "5" "Salir" \
        --height=300 --width=400)
    
case $option in
1)
    new_directory
;;
2)
    new_archive
;;
3)
    view_content
;;
4)
    del_archive
;;
5) 
    zenity --info --text="Operación finalizada" \
    --width=300
    exit 
;;
*) 
    zenity --error --text="Opción no válida." \
    --width=300
    exit
;;
esac
done