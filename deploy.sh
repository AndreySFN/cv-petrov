#!/bin/bash

# Параметры
SERVER_USER="root"
SERVER_HOST="bestcv.pro"
SERVER_DIR="/root/bestcv/server"
SCRIPT_DIR="/root/bestcv"
LOCAL_DIR="."

# Запрос пароля от пользователя
echo "Введите ваш пароль SSH:"
read -s SSH_PASSWORD

# Удаление содержимого на сервере
echo "Clearing server directory..."
sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_HOST} "rm -rf ${SERVER_DIR}/*"
if [ $? -ne 0 ]; then
  echo "Ошибка очистки папки на сервере."
  exit 1
fi

# Функция для передачи файла или директории, если она существует
transfer_if_exists() {
  local path=$1
  if [ -e "${LOCAL_DIR}/${path}" ]; then
    echo "Transferring ${path} to server..."
    sshpass -p "$SSH_PASSWORD" rsync -avzP --progress -e "ssh -o StrictHostKeyChecking=no" ${LOCAL_DIR}/${path} ${SERVER_USER}@${SERVER_HOST}:${SERVER_DIR}
    if [ $? -ne 0 ]; then
      echo "Ошибка передачи ${path} на сервер."
      exit 1
    fi
  else
    echo "${path} не найдено, пропуск передачи."
  fi
}

# Передача файлов и папок на сервер
transfer_if_exists ".next"
transfer_if_exists "public"
transfer_if_exists "package.json"
transfer_if_exists "yarn.lock"
transfer_if_exists ".env"

# Запуск серверного скрипта
echo "Running server script..."
sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_HOST} "bash ${SCRIPT_DIR}/deploy.sh ${PORT}"
if [ $? -ne 0 ]; then
  echo "Ошибка запуска серверного скрипта."
  exit 1
fi

echo "Все задачи выполнены успешно."
