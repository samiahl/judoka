/**
 * Created by sami on 24.2.2017.
 */
import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="athletes-selector">
                    {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
                </div>
            </div>
        );
    }
}