// page-object/profile-page.ts
import { Locator, Page, expect } from '@playwright/test';

export class ProfilePage {
    readonly page: Page;
    readonly profileNameInput: Locator;
    readonly saveButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileNameInput = page.getByTestId('profile-name');
        this.saveButton = page.getByTestId('profile-save');
        this.successMessage = page.getByTestId('profile-success');
    }

    async updateFullName(newName: string) {
        await this.profileNameInput.fill(newName);
        await this.saveButton.click();
    }

    async verifyUpdateSuccess() {
        await expect(this.successMessage).toBeVisible();
    }
}
