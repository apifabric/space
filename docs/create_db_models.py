# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Text
from sqlalchemy.orm import declarative_base, relationship, Session
from datetime import datetime

# Base class for declarative models
Base = declarative_base()

class Manufacturer(Base):
    """description: Table storing information about spaceship manufacturers."""
    __tablename__ = 'manufacturers'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    country = Column(String)
    founded = Column(DateTime)  # Date of founding

class SpaceshipModel(Base):
    """description: Table storing models of spaceships available for sale."""
    __tablename__ = 'spaceship_models'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(Integer, ForeignKey('manufacturers.id'))
    capacity = Column(Integer)  # Number of passengers
    price = Column(Float)  # Price in million USD

class Spaceship(Base):
    """description: Table storing individual spaceships for sale or previously sold."""
    __tablename__ = 'spaceships'

    id = Column(Integer, primary_key=True)
    spaceship_model_id = Column(Integer, ForeignKey('spaceship_models.id'))
    year_manufactured = Column(Integer)
    status = Column(String)  # Available, Sold, Maintenance

class Customer(Base):
    """description: Table storing customer information."""
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String)
    preferred_contact = Column(String)  # Email, Phone, None

class Salesperson(Base):
    """description: Table storing details of salespeople."""
    __tablename__ = 'salespeople'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    hire_date = Column(DateTime)

class Sale(Base):
    """description: Table storing sales records."""
    __tablename__ = 'sales'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(Integer, ForeignKey('spaceships.id'))
    customer_id = Column(Integer, ForeignKey('customers.id'))
    salesperson_id = Column(Integer, ForeignKey('salespeople.id'))
    sale_date = Column(DateTime, default=datetime.utcnow)
    total_price = Column(Float)  # in million dollars

class ServiceAgreement(Base):
    """description: Table storing service agreements for spaceships."""
    __tablename__ = 'service_agreements'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(Integer, ForeignKey('spaceships.id'))
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    agreement_price = Column(Float)  # price of service agreement

class ServiceRecord(Base):
    """description: Table storing service and maintenance records."""
    __tablename__ = 'service_records'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(Integer, ForeignKey('spaceships.id'))
    service_date = Column(DateTime)
    description = Column(Text)

class TestDrive(Base):
    """description: Table storing test drive records by potential customers."""
    __tablename__ = 'test_drives'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    spaceship_model_id = Column(Integer, ForeignKey('spaceship_models.id'))
    test_date = Column(DateTime, default=datetime.utcnow)
    feedback = Column(Text)

class InsurancePolicy(Base):
    """description: Table storing insurance policies on purchased spaceships."""
    __tablename__ = 'insurance_policies'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(Integer, ForeignKey('spaceships.id'))
    policy_number = Column(String, nullable=False)
    provider = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    insured_amount = Column(Float)

class Loan(Base):
    """description: Table storing loan details for spaceship purchases."""
    __tablename__ = 'loans'

    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    spaceship_id = Column(Integer, ForeignKey('spaceships.id'))
    loan_amount = Column(Float)  # Loan amount in million dollars
    interest_rate = Column(Float)  # Annual interest rate

class SpaceshipManufacturerLink(Base):
    """description: Link table between spaceships/features and their manufacturer."""
    __tablename__ = 'spaceship_manufacturer_links'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(Integer, ForeignKey('spaceships.id'))
    manufacturer_id = Column(Integer, ForeignKey('manufacturers.id'))

# Create the database engine
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')

# Create all tables
Base.metadata.create_all(engine)

# Creating a session to add test data
session = Session(bind=engine)

# Let's add some sample data for all tables
# Adding Manufacturers
m1 = Manufacturer(name='GalacticCrafts', country='USA', founded=datetime(2092, 5, 17))
m2 = Manufacturer(name='CosmosWorks', country='Japan', founded=datetime(2080, 3, 10))

# Adding Spaceship Models
sm1 = SpaceshipModel(name='StarRunner X', manufacturer_id=1, capacity=5, price=5.5)
sm2 = SpaceshipModel(name='Nebula Cruiser', manufacturer_id=2, capacity=10, price=10.75)

# Adding Spaceships
s1 = Spaceship(spaceship_model_id=1, year_manufactured=2120, status='Available')
s2 = Spaceship(spaceship_model_id=2, year_manufactured=2119, status='Sold')

# Adding Customers
c1 = Customer(name='Alice Bold', email='alice@example.com', phone='123-456-7890', preferred_contact='Email')
c2 = Customer(name='John Doe', email='john@example.com', phone='234-567-8901', preferred_contact='Phone')

# Adding Salespersons
sp1 = Salesperson(name='Tommy Sales', hire_date=datetime(2115, 7, 25))
sp2 = Salesperson(name='Laura Crews', hire_date=datetime(2118, 9, 12))

# Adding Sales
sale1 = Sale(spaceship_id=2, customer_id=1, salesperson_id=1, sale_date=datetime(2120, 7, 1), total_price=10.0)

# Adding Service Agreements
sa1 = ServiceAgreement(spaceship_id=2, start_date=datetime(2120, 7, 1), end_date=datetime(2123, 7, 1), agreement_price=0.5)

# Adding Service Records
sr1 = ServiceRecord(spaceship_id=2, service_date=datetime(2121, 8, 15), description='Annual maintenance')

# Adding Test Drives
td1 = TestDrive(customer_id=1, spaceship_model_id=1, test_date=datetime(2121, 6, 20), feedback='Loved the speed!')

# Adding Insurance Policies
ip1 = InsurancePolicy(spaceship_id=2, policy_number='XYZ123', provider='Intergalactic Insurance Co.', start_date=datetime(2120, 7, 1), end_date=datetime(2123, 7, 1), insured_amount=12.0)

# Adding Loans
loan1 = Loan(customer_id=1, spaceship_id=2, loan_amount=8.0, interest_rate=3.5)

# Adding SpaceshipManufacturerLink
link1 = SpaceshipManufacturerLink(spaceship_id=1, manufacturer_id=1)

# Persist all data
session.add_all([m1, m2, sm1, sm2, s1, s2, c1, c2, sp1, sp2, sale1, sa1, sr1, td1, ip1, loan1, link1])

# Commit data to the database
session.commit()

# Close the session
session.close()
