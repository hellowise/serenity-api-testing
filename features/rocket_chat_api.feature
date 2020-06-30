# encoding: UTF-8

Feature: Rocket chat API

  @login
  Scenario: Rocket chat login using valid credentials
    When "Venus" logs into rocket chat using valid credentials
    Then she should successfully be authorized in the application
    And she should be online
