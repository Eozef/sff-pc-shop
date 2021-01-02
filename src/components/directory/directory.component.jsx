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
                    id: 1,
                    linkUrl: 'Dan'
                },
                {
                    title: 'Ncase',
                    imageUrl: 'https://i.ibb.co/yfKKchf/m1-960x.jpg',
                    size: 'large',
                    id: 2,
                    linkUrl:''
                },
                {
                    title: 'MJOLNIR',
                    imageUrl: 'https://i.ibb.co/hf87XbN/mr-960x.jpg',
                    size: 'large',
                    id: 3,
                    linkUrl:''

                },
                {
                    title: 'FormD T1',
                    imageUrl: 'https://i.ibb.co/mvGCgK3/hero-t1-960x.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl:''

                },
                {
                    title: 'louqe Ghost S1',
                    imageUrl: 'https://i.ibb.co/mTMvNDR/g1-960x.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl:''

                }
            ]

        };

    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id,...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default Directory;

