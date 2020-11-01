# password-generator

## Password-Generator Project

This project involved creating the logic in javascript for the application to generate a random password using uppercase, lowercase, numbers, and/or symbols. The use of the four options mentioned depends on the user selection. The user indicates the length of the password with a minimum requirement of 8 characters and a maximum of 128 characters. 

The very first prompt the user is presented with after clicking the generate password button is for the length of the password. If the user enters a number outside of the mentioned parameter, a while loop will alert the user that invalid information was entered in and the prompt will be presented again.

Once the user enters a valid number for the legth of the password, the first confirm is presented to the user. The user is asked to indicate the use of uppercase, lowercase, numbers, and/or symbols for the password to be generated. The user can select any combination of these character types. If the user does not make a selection, a while loop will alert the user to select at least one character type.

After the user makes at least one selection, the application will generate a random password with the specified length