import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Resty from './resty';


describe ('unResty container', () => {
    it('fetches a request from API', async () => {
        render(<Resty />)

        screen.getByText('unResty', {exact: false});

        const apiInput = await screen.getByRole('textbox', { name: 'url' });
        userEvent.type(apiInput, 'https://jsonplaceholder.typicode.com/posts/1');

        const radioButtons = await screen.findByLabelText('GET');
        userEvent.type(radioButtons, 'GET');

        const fetchButton = await screen.getByRole('button', { name: 'submit' });
        fireEvent.click(fetchButton);

        screen.getByRole('textbox', { name: 'results' });

        return waitFor(() => {
            const historyList = screen.getAllByText('json', { exact: false });
            // console.log(historyList);
            expect(historyList[0]).not.toBeEmptyDOMElement();
        });
    })
})