# my Todo

A sample application using Django-Rest-Framework and angular for a persistent Todo list.


## Requirements

```
npm
bower

Django==1.8.5
django-cors-headers==1.1.0
djangorestframework==3.2.4
```

## Installation

### 1. virtualenv / virtualenvwrapper

`$ mkvirtualenv --clear projectname`

### 2. Download
Download this repository with the following commands

    $ cd /path/to/your/workspace
    $ git clone https://github.com/zwernberg/myTodo.git
 	or
 	$ git clone git@github.com:zwernberg/myTodo.git

### 3. Django Requirements
To install the python requirements run the following from the command line.

`$ pip install -r requirements.txt`

### 4. Bower Setup
Bower is used to pull in the frontend dependencies. to install bower use
`$ npm install -g bower

`$ bower install

### 5. Run the Development Server

```
$ python manage.py migrate
$ python manage.py runserver
```
