import React from 'react'
import {data} from './testRecords.json'
import TreeHierachy from './TreeHierachy'


describe('For various data the test case should be passed',()=>{
     test('readers a tree area',()=>{
         const tree=<TreeHierachy records={data} />;
         expect(tree).toBeTruthy();
     })
})

