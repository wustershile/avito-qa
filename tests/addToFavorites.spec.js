import { test, expect } from '@playwright/test'


const AVITO_URL = 'https://www.avito.ru'
const AD_PATH = '/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363'

const FAVORITES_PATH = '/favorites'


test('Кнопка добавления в избранное меняет текст', async ({ page }) => {
  await page.goto(AVITO_URL + AD_PATH)
  
  const favoriteButton = page.locator('[data-marker="item-view/favorite-button"]').nth(1)

  await expect(favoriteButton).toHaveText("Добавить в избранное")
  await favoriteButton.click()
  await expect(favoriteButton).toHaveText("В избранном")
})

test('Появляется поповер со ссылкой на страницу Избранное', async ({ page }) => {
  await page.goto(AVITO_URL + AD_PATH)
  
  const favoriteButton = page.locator('[data-marker="item-view/favorite-button"]').nth(1)
  await favoriteButton.click()

  const popover = page.getByText('Добавлено в избранное')
  await expect(popover).toBeVisible() 

  await expect(popover.locator('a')).toHaveAttribute('href', FAVORITES_PATH + '/knigi_i_zhurnaly')
})


test('Объявление появляется на странице Избранное', async ({ page }) => {
  await page.goto(AVITO_URL + AD_PATH)
  
  const favoriteButton = page.locator('[data-marker="item-view/favorite-button"]').nth(1)
  await favoriteButton.click()
  
  await page.goto(AVITO_URL + FAVORITES_PATH)
  await expect(page.locator('[data-marker="item-2639542363"] a').nth(0)).toHaveAttribute('href', AD_PATH)
})
