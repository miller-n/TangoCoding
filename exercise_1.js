/**
 * Created by nick on 10/20/16.
 *
 * 
 *
 */



function find_diff_unsorted(myarray){

    var max = 0;
    for (i = 0; i < myarray.length; i++)
    {
        for (j = 0; j <myarray.length; j++)
        {

            var temp = myarray[j] - myarray[i];
            temp = Math.abs(temp);
            if(temp > max)
            {
                max = temp;
            }
        }
    }
    console.log(max)
}

function find_diff_sorted(myarray){

    myarray.sort(function (a, b) {return a-b});
    var max = myarray[myarray.length-1] - myarray[0];
    console.log(max);
}

myarray = [2, 5, 7, 9, 3, 1, 10]; // used for testing

find_diff_unsorted(myarray);
find_diff_sorted(myarray);