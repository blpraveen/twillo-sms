
# Twillo SMS Message

This project is built using [Flask](http://flask.pocoo.org/) web framework.
Front End Application is a [React](https://reactjs.org/)
## Getting Started

### Prerequisites

Kindly ensure you have the following installed:
- [ ] [Python 3.10](https://www.python.org/downloads/release/python-365/)
- [ ] [Pip](https://pip.pypa.io/en/stable/installing/)
- [ ] [Virtualenv](https://virtualenv.pypa.io/en/stable/installation/)
- [ ] [nodejs 16.17](https://nodejs.org)

## Installation Manually
### Setting up + Running Backend

1. First clone this repository and `cd` into it:

```bash

   $ git clone https://github.com/blpraveen/twillo-sms
   $ cd twillo-sms
```

2. With Python 3.10 and Pip installed:
    ```bash
    $ cd backend
    ```
    Create a Virtualenv and activate
    ```bash
    $ virtualenv --python=python3 env --no-site-packages
    $ source env/bin/activate
    ```
    
3.  Install the dependencies.
    ```bash
    $ pip install -r requirements.txt
    ```

4. Execute the migrations to create the `message` table:

    ```bash
    $ flask db init
    $ flask db migrate
    $ flask db upgrade
    ```
## Installation via Bash
1. Run the bash command `build.sh`
   ```bash
   $bash ./build.sh
   ```

### Twillo Configuration 

1. Copy the sample configuration file and edit it to match your configuration.

   ```bash
   $ cd  backend
   $ cp .env.example .env
   ```

   You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your
   [Twilio Account Settings](https://www.twilio.com/console).
   You will also need a `TWILIO_NUMBER`, which you may find [here](https://www.twilio.com/console/phone-numbers/incoming).

   Run `source .env` to export the environment variables.

### Start Application Manually 
1. Run the Flask Backend API:

    ```bash
    $ python app.py
    ```
2. Run the React FrontEnd:
   ```bash
   $ npm start
   ```

### Start Application via bash 
1. Run bash file `run.sh`:

    ```bash
    $ bash ./run.sh
    ```

Backend flask will start on `http://localhost:5000`
 and the frontend application will start on [http://localhost:3000/](http://localhost:5000/)
 
<a href="https://nodejs.org">
  <img src="https://nodejs.org/static/images/logo.svg" alt="Nodejs" width="150" />
</a>
<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="150" />
</a>
<!--
  You can grab the appropriate description from https://www.twilio.com/docs/tutorials.
-->

## Contribution

Please feel free to raise issues using this [template](./.github/ISSUE_TEMPLATE.md) and I'll get back to you.

You can also fork the repository, make changes and submit a Pull Request using this [template](./.github/PULL_REQUEST_TEMPLATE.md).

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)