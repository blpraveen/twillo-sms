import os

basedir = os.path.abspath(os.path.dirname(__file__))


class DefaultConfig(object):
    SECRET_KEY = 'secret-key'
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = ('sqlite:///' +
                               os.path.join(basedir, 'data.db'))
    TWILIO_ACCOUNT_SID = os.environ.get('TWILIO_ACCOUNT_SID', None)
    TWILIO_AUTH_TOKEN = os.environ.get('TWILIO_AUTH_TOKEN', None)
    TWILIO_NUMBER = os.environ.get('TWILIO_NUMBER', None)
    SESSION_TYPE = 'sqlalchemy'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PROPAGATE_EXCEPTIONS = True


class DevelopmentConfig(DefaultConfig):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = ('sqlite:///' +
                               os.path.join(basedir, 'data.db'))
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PROPAGATE_EXCEPTIONS = True
    SESSION_TYPE = 'sqlalchemy'


class TestConfig(DefaultConfig):
    SQLALCHEMY_DATABASE_URI = ('sqlite:///' +
                               os.path.join(basedir, 'test.sqlite'))
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    DEBUG = True
    TWILIO_ACCOUNT_SID = 'AC2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    TWILIO_AUTH_TOKEN = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    TWILIO_NUMBER = '+15551230987'

config_env_files = {
    'test': 'config.TestConfig',
    'development': 'config.DevelopmentConfig',
}