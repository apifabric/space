# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 28, 2024 17:06:17
# Database: sqlite:////tmp/tmp.YWJtKxT3Gm/space/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Table storing customer information.
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String)
    preferred_contact = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    TestDrifeList : Mapped[List["TestDrife"]] = relationship(back_populates="customer")
    LoanList : Mapped[List["Loan"]] = relationship(back_populates="customer")
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="customer")



class Manufacturer(SAFRSBaseX, Base):
    """
    description: Table storing information about spaceship manufacturers.
    """
    __tablename__ = 'manufacturers'
    _s_collection_name = 'Manufacturer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    country = Column(String)
    founded = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    SpaceshipModelList : Mapped[List["SpaceshipModel"]] = relationship(back_populates="manufacturer")
    SpaceshipManufacturerLinkList : Mapped[List["SpaceshipManufacturerLink"]] = relationship(back_populates="manufacturer")



class Salesperson(SAFRSBaseX, Base):
    """
    description: Table storing details of salespeople.
    """
    __tablename__ = 'salespeople'
    _s_collection_name = 'Salesperson'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    hire_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="salesperson")



class SpaceshipModel(SAFRSBaseX, Base):
    """
    description: Table storing models of spaceships available for sale.
    """
    __tablename__ = 'spaceship_models'
    _s_collection_name = 'SpaceshipModel'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(ForeignKey('manufacturers.id'))
    capacity = Column(Integer)
    price = Column(Float)

    # parent relationships (access parent)
    manufacturer : Mapped["Manufacturer"] = relationship(back_populates=("SpaceshipModelList"))

    # child relationships (access children)
    SpaceshipList : Mapped[List["Spaceship"]] = relationship(back_populates="spaceship_model")
    TestDrifeList : Mapped[List["TestDrife"]] = relationship(back_populates="spaceship_model")



class Spaceship(SAFRSBaseX, Base):
    """
    description: Table storing individual spaceships for sale or previously sold.
    """
    __tablename__ = 'spaceships'
    _s_collection_name = 'Spaceship'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    spaceship_model_id = Column(ForeignKey('spaceship_models.id'))
    year_manufactured = Column(Integer)
    status = Column(String)

    # parent relationships (access parent)
    spaceship_model : Mapped["SpaceshipModel"] = relationship(back_populates=("SpaceshipList"))

    # child relationships (access children)
    InsurancePolicyList : Mapped[List["InsurancePolicy"]] = relationship(back_populates="spaceship")
    LoanList : Mapped[List["Loan"]] = relationship(back_populates="spaceship")
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="spaceship")
    ServiceAgreementList : Mapped[List["ServiceAgreement"]] = relationship(back_populates="spaceship")
    ServiceRecordList : Mapped[List["ServiceRecord"]] = relationship(back_populates="spaceship")
    SpaceshipManufacturerLinkList : Mapped[List["SpaceshipManufacturerLink"]] = relationship(back_populates="spaceship")



class TestDrife(SAFRSBaseX, Base):
    """
    description: Table storing test drive records by potential customers.
    """
    __tablename__ = 'test_drives'
    _s_collection_name = 'TestDrife'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'))
    spaceship_model_id = Column(ForeignKey('spaceship_models.id'))
    test_date = Column(DateTime)
    feedback = Column(Text)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("TestDrifeList"))
    spaceship_model : Mapped["SpaceshipModel"] = relationship(back_populates=("TestDrifeList"))

    # child relationships (access children)



class InsurancePolicy(SAFRSBaseX, Base):
    """
    description: Table storing insurance policies on purchased spaceships.
    """
    __tablename__ = 'insurance_policies'
    _s_collection_name = 'InsurancePolicy'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(ForeignKey('spaceships.id'))
    policy_number = Column(String, nullable=False)
    provider = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    insured_amount = Column(Float)

    # parent relationships (access parent)
    spaceship : Mapped["Spaceship"] = relationship(back_populates=("InsurancePolicyList"))

    # child relationships (access children)



class Loan(SAFRSBaseX, Base):
    """
    description: Table storing loan details for spaceship purchases.
    """
    __tablename__ = 'loans'
    _s_collection_name = 'Loan'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'))
    spaceship_id = Column(ForeignKey('spaceships.id'))
    loan_amount = Column(Float)
    interest_rate = Column(Float)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("LoanList"))
    spaceship : Mapped["Spaceship"] = relationship(back_populates=("LoanList"))

    # child relationships (access children)



class Sale(SAFRSBaseX, Base):
    """
    description: Table storing sales records.
    """
    __tablename__ = 'sales'
    _s_collection_name = 'Sale'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(ForeignKey('spaceships.id'))
    customer_id = Column(ForeignKey('customers.id'))
    salesperson_id = Column(ForeignKey('salespeople.id'))
    sale_date = Column(DateTime)
    total_price = Column(Float)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("SaleList"))
    salesperson : Mapped["Salesperson"] = relationship(back_populates=("SaleList"))
    spaceship : Mapped["Spaceship"] = relationship(back_populates=("SaleList"))

    # child relationships (access children)



class ServiceAgreement(SAFRSBaseX, Base):
    """
    description: Table storing service agreements for spaceships.
    """
    __tablename__ = 'service_agreements'
    _s_collection_name = 'ServiceAgreement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(ForeignKey('spaceships.id'))
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    agreement_price = Column(Float)

    # parent relationships (access parent)
    spaceship : Mapped["Spaceship"] = relationship(back_populates=("ServiceAgreementList"))

    # child relationships (access children)



class ServiceRecord(SAFRSBaseX, Base):
    """
    description: Table storing service and maintenance records.
    """
    __tablename__ = 'service_records'
    _s_collection_name = 'ServiceRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(ForeignKey('spaceships.id'))
    service_date = Column(DateTime)
    description = Column(Text)

    # parent relationships (access parent)
    spaceship : Mapped["Spaceship"] = relationship(back_populates=("ServiceRecordList"))

    # child relationships (access children)



class SpaceshipManufacturerLink(SAFRSBaseX, Base):
    """
    description: Link table between spaceships/features and their manufacturer.
    """
    __tablename__ = 'spaceship_manufacturer_links'
    _s_collection_name = 'SpaceshipManufacturerLink'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    spaceship_id = Column(ForeignKey('spaceships.id'))
    manufacturer_id = Column(ForeignKey('manufacturers.id'))

    # parent relationships (access parent)
    manufacturer : Mapped["Manufacturer"] = relationship(back_populates=("SpaceshipManufacturerLinkList"))
    spaceship : Mapped["Spaceship"] = relationship(back_populates=("SpaceshipManufacturerLinkList"))

    # child relationships (access children)
