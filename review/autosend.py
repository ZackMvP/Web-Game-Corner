import time
import pyautogui

def set_timer():
    # Wait for the user to switch to the desired app
    time.sleep(5)
    
    pyautogui.typewrite("AUTO ABORT IN: ")
    pyautogui.press('enter')
    # Write the timer value
    for i in range(10,0,-1):
        pyautogui.typewrite(str(i))
        pyautogui.press('enter')
        time.sleep(1)
    
    # Press the Enter key
    pyautogui.press('enter')

# Usage example
timer_value = 10  # Set the desired timer value
set_timer()






