Feature: Automate the Transmedia Inc. Website

    Background:
        Given User open transmedia website

    Scenario: User able to create board successfully.
        When Click on the board
        And Input a board name and press enter
        And Verify board created successfully

    Scenario: Add two lists and verify they are created and deleted successfully
        When Goto the created board
        And Add two lists to the board
        And Verify two lists are successfully created
        And Delete the created list
