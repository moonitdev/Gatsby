import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  ErrorBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ErrorBar}
// const colorsList = ['#008f68', '#6db65b', '#4aae9b', '#dfa612'];

class CandleStick extends PureComponent {
    render() {
        return (
        <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
            <BarChart data={this.props.data}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis xAxisId={0} dataKey="name" hide/>
                <XAxis xAxisId={1} dataKey="name"/>
                <YAxis/>
                <Tooltip cursor={{fill: 'transparent'}}/>
                <Bar barSize={10} xAxisId={0}  dataKey="max" fill="#035aa6" />
                <Bar barSize={12} xAxisId={1} dataKey='min' fill="white">
                    <ErrorBar dataKey="error" width={4} strokeWidth={2} stroke="#66c208" />
                    <ErrorBar dataKey="errorNegative" width={4} strokeWidth={2} stroke="#ff0044" />
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
        );
    }
}


export default CandleStick;