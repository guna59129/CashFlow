import React, { useState, useEffect } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import axios from "axios";

const url = "http://localhost:8080/money";

function Form() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [details, setDetails] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    // 2. Function to fetch only the total
    const fetchTotal = async () => {
        try {
            const response = await axios.get(`${url}/total`);
            setGrandTotal(response.data);
        } catch (error) {
            console.error("Error fetching total:", error);
        }
    };

    // Fetch data - only depends on page number
    const fetchData = async (page = 0) => {
        try {
            const response = await axios.get(`${url}?page=${page}&size=10`);
            // Page object contains 'content' array and 'totalPages'
            setDetails(response.data.content);
            setTotalPages(response.data.totalPages);
            fetchTotal()
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Run fetch only when currentPage changes
    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const numericAmount = Number(amount);
        if (!description.trim() || numericAmount <= 0) return;

        const newExpense = {
            amount: numericAmount,
            description: description.trim()
            // Date is handled by @PrePersist in Backend
        };

        try {
            await axios.post(url, newExpense);
            fetchTotal()
            setDescription("");
            setAmount("");
            // Go to first page to see the new item
            if (currentPage === 0) {
                fetchData(0);
            } else {
                setCurrentPage(0);
            }
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`${url}/${id}`);
            fetchTotal()
            // Refresh current page
            fetchData(currentPage);
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    // Note: totalAmount here only sums the current page's 10 items
    const pageTotal = details.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-4 sm:p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-black tracking-tight text-indigo-600">CashFlow</h1>
                    <p className="font-medium text-gray-500">
                        Grand Total: <span className="text-indigo-600 font-bold">₹{grandTotal.toLocaleString()}</span>
                    </p>
                </div>

                {/* Input Card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-5">
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Expense Name"
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20"
                            />
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Amount (₹)"
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20"
                            />
                        </div>
                        <button type="submit" className="cursor-pointer w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all active:scale-95">
                            <PlusCircle size={20} /> Add Expense
                        </button>
                    </form>
                </div>

                {/* History Section */}
                <div className="space-y-4">
                    <div className="space-y-3">
                        {details.length > 0 ? (
                            details.map((item) => (
                                <div key={item.id || item.Id} className="flex items-center justify-between p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <div className="flex flex-col">
                                        <span className="font-bold">{item.description}</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-lg font-black">₹{item.amount}</span>
                                        <button onClick={() => deleteItem(item.id || item.Id)} className="cursor-pointer text-gray-300 hover:text-red-500 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-gray-400 italic">No expenses recorded yet.</div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 0 && (
                        <div className="flex justify-center items-center gap-6 mt-8">
                            <button
                                disabled={currentPage === 0}
                                onClick={() => setCurrentPage(prev => prev - 1)}
                                className="px-6 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-50 font-bold"
                            >
                                Prev
                            </button>
                            <span className="font-bold text-sm">
                                {currentPage + 1} / {totalPages}
                            </span>
                            <button
                                disabled={currentPage >= totalPages - 1}
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                className="px-6 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl disabled:opacity-50 font-bold"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;