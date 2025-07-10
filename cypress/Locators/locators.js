class locatorsPage {

  // Board and List locators
  boardCard = "(//h1[normalize-space()='Create new board'])[1]"
  boardInput = "(//input[@placeholder='Add board title'])[1]"
  boardTitle = "(//input[@name='board-title'])[1]"
  createdBoard = "(//h2[normalize-space()='Board_'])[1]"
  addListButton = "(//div[@class='inline-block align-top'])[1]"
  addListButton2 = "(//div[@class='inline-block align-top'])[2]"
  listInput = "(//input[@placeholder='Enter list title...'])[1]"
  listCard = '//div[@data-cy="list"]'
  threeDotButton = "(//button[@data-cy='list-options'])[1]"
  deleteList = "//div[contains(text(), 'Delete list')]"
  threeDotButtonBoard = "(//button[@data-cy='board-options'])[1]"
  deleteBoard = "//div[contains(text(), 'Delete board')]"




}
export default locatorsPage;