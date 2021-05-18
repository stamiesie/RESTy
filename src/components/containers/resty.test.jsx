import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Resty from './resty';


describe ('unResty container', () => {
    it('fetches a request from API', () => {
        render(<Resty />)

        screen.getByText('unResty', {exact: false});

        const apiInput = screen.getByRole('textbox', { name: 'url' });
        userEvent.type(apiInput, 'https://jsonplaceholder.typicode.com/posts/1');

        const radioButtons = screen.findByLabelText('GET');
        userEvent.type(radioButtons, 'GET');

        // const fetchButton = screen.getByRole('button', { name: 'submit' });
        // fireEvent.click(fetchButton);

        screen.getByRole('textbox', { name: 'results' });

        // return waitFor(() => {
        //     const historyList = screen.getByRole('list', { name: 'history-list' });
        //     console.log(historyList);
        //     expect(historyList).not.toBeEmptyDOMElement();
        // });
    })
})