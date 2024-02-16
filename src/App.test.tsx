import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { App, WrappedApp } from './App'

describe('App', () => {
    it('render hello world', () => {
        // Arrange
        render(<WrappedApp />)
        // Act
        // Expect
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello World')
    })
    it('render not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/invalid']}>
                <App />
            </MemoryRouter>
        )
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not Found')
    })
})
