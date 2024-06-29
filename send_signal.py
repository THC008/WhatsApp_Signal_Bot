import subprocess
import sys

def send_signal_message(recipient, message):
    subprocess.run(["signal-cli", "-u", "your_signal_number", "send", recipient, "-m", message])

if __name__ == "__main__":
    recipient = sys.argv[1]
    message = sys.argv[2]
    send_signal_message(recipient, message)
