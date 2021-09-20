#!/bin/bash
sudo apt update -y
sudo apt install -y python3-pip

python3 -m pip install --upgrade pip
python3 -m pip install jupyterlab --no-warn-script-location

echo 'export PATH="$PATH:/home/rhyme/.local/bin"' >> ~/.profile
echo 'export PATH="$PATH:/home/rhyme/.local/bin"' >> ~/.bashrc

mkdir /home/rhyme/Desktop/Project/

cat > jupyterlab.desktop <<EOF
[Desktop Entry]
Type=Application
Name=JupyterLab
Exec=jupyter lab --NotebookApp.notebook_dir=/home/rhyme/Desktop/Project/
Terminal=false
EOF

sudo mv jupyterlab.desktop /etc/xdg/autostart/

xdg-settings set default-web-browser firefox.desktop

echo -e "\n[✔] Installation complete!"
echo -e "[✔] Jupyter Lab will launch in /home/rhyme/Desktop/Project/"
echo -e "[*] To install Python packages use: pip install <package-name>"
echo -e "[*] Please put your .ipynb notebooks in /home/rhyme/Desktop/Project/"
echo -e "[*] To autolaunch a particular notebook, edit /etc/xdg/autostart/jupyterlab.desktop and add your notebook name after jupyter lab"
echo -e "[✔] Save your Cloud Desktop to auto launch Jupyter Lab on startup\n"
