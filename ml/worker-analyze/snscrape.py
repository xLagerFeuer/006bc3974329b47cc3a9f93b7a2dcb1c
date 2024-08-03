

import subprocess

def run_snscrape(username: str):
    result = subprocess.run(['snscrape', 'vkontakte-user', username], capture_output=True, text=True)
    return result.stdout

