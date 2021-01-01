import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Dan A4',
                    imageUrl: 'https://i.ibb.co/X4CV5qr/a4-960x.jpg',
                    size: 'large',
                    id: 1
                },
                {
                    title: 'Ncase',
                    imageUrl: 'https://i.ibb.co/yfKKchf/m1-960x.jpg',
                    size: 'large',
                    id: 2
                },
                {
                    title: 'MJOLNIR',
                    imageUrl: 'https://i.ibb.co/hf87XbN/mr-960x.jpg',
                    size: 'large',
                    id: 3
                },
                {
                    title: 'FormD T1',
                    imageUrl: 'https://i.ibb.co/mvGCgK3/hero-t1-960x.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'louqe Ghost S1',
                    imageUrl: 'https://i.ibb.co/mTMvNDR/g1-960x.jpg',
                    size: 'large',
                    id: 5
                }
            ]

        };

    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }
}

export default Directory;

