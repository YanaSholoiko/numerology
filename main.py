import os

@app.route('/debug-files')
def debug_files():
    files = []
    for root, dirs, filenames in os.walk('.'):
        for filename in filenames:
            files.append(os.path.join(root, filename))
    return '<br>'.join(files)
