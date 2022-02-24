<?php

namespace App\Http\Controllers;

use App\Models\AskHelp;
use Illuminate\Http\Request;

class AskHelpController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required',
        ]);

        if (auth()->check()) {
            $store = AskHelp::create([
                'message' => $request->message,
                'startup_id' => auth()->user()->startup_id,
                'status' => 'undone'
            ]);

            return response([
                'message' => 'success'
            ], 200);
        }

        return response([
            'message' => 'error'
        ], 403);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AskHelp  $askHelp
     * @return \Illuminate\Http\Response
     */
    public function show(AskHelp $askHelp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AskHelp  $askHelp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AskHelp $askHelp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AskHelp  $askHelp
     * @return \Illuminate\Http\Response
     */
    public function destroy(AskHelp $askHelp)
    {
        //
    }
}
